using System;
using Sitecore.XConnect;
using Sitecore.XConnect.Client;
using Sitecore.XConnect.Collection.Model;
using Sitecore.XConnect.Schema;
using Blueprint.Feature.Demo.XConnect.Model;

namespace App.XConnect.Demo
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("(R)ead or (W)rite?");
            var key = Console.ReadKey();
            if (key.KeyChar.Equals('w'))
            {
                AddContact();
            }
            else if (key.KeyChar.Equals('r'))
            {
                ReadContact();
            }

        }

        private static void ReadContact()
        {
            using (var client = GetClient())
            {
                var contact = new IdentifiedContactReference("domain", "docker.examples");

                var retrievedContact = client.Get(contact, new ContactExpandOptions(new[] { DemoFacet.DefaultFacetKey, PersonalInformation.DefaultFacetKey, EmailAddressList.DefaultFacetKey }));

                Console.WriteLine();
                Console.WriteLine("Contact: docker.examples");
                Console.WriteLine("Facets: ");
                foreach (var facet in retrievedContact.Facets)
                {
                    if (facet.Value is DemoFacet)
                    {
                        var demoFacet = facet.Value as DemoFacet;
                        Console.WriteLine("\t" + facet.Key + " | " + demoFacet.FavoriteAnimal);
                    }
                    else if (facet.Value is PersonalInformation)
                    {
                        var personalInformation = facet.Value as PersonalInformation;
                        Console.WriteLine("\t" + facet.Key + " | " + personalInformation.FirstName + " " + personalInformation.LastName);
                    }
                    else if (facet.Value is EmailAddressList)
                    {
                        var email = facet.Value as EmailAddressList;
                        Console.WriteLine("\t" + facet.Key + " | " + email.PreferredEmail.SmtpAddress);
                    }
                }
            }
        }

        private static void AddContact()
        {
            using (var client = GetClient())
            {
                var contact = new Contact(new ContactIdentifier("domain", "docker.examples", ContactIdentifierType.Known));

                var personalInfo = new PersonalInformation
                {
                    FirstName = "Docker",
                    LastName = "Examples"
                };
                client.SetFacet(contact, PersonalInformation.DefaultFacetKey, personalInfo);

                var emailFacet = new EmailAddressList(new EmailAddress("docker.examples@sitecore.com", true), "domain");
                client.SetFacet(contact, EmailAddressList.DefaultFacetKey, emailFacet);

                // Add our custom facet
                var demoFacet = new DemoFacet
                {
                    FavoriteAnimal = "Whale"
                };
                client.SetFacet(contact, DemoFacet.DefaultFacetKey, demoFacet);

                client.AddContact(contact);
                client.Submit();

                Console.WriteLine("Added contact!");
            }
        }

        private static XConnectClient GetClient()
        {
            var config = new XConnectClientConfiguration(
                new XdbRuntimeModel(DemoModel.Model), // Use our custom model
                new Uri("http://localhost:8081/"),
                new Uri("http://localhost:8081/"));

            try
            {
                config.Initialize();
            }
            catch (XdbModelConflictException ex)
            {
                Console.WriteLine(ex.Message);
                throw;
            }

            return new XConnectClient(config);
        }
    }
}
