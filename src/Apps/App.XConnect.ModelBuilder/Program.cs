using System;
using System.IO;
using Sitecore.XConnect.Schema;
using Blueprint.Feature.Demo.XConnect.Model;

namespace App.XConnect.ModelBuilder
{
    class Program
    {
        static void Main(string[] args)
        {
            var path = GetOutputPath(args);

            // Call SerializeModel for each custom model here
            SerializeModel(path, DemoModel.Model);
        }

        private static string GetOutputPath(string[] args)
        {
            return args.Length > 0 ? Directory.CreateDirectory(args[0]).FullName : "../../../../environment/xconnect/App_Data/Models";
        }

        private static void SerializeModel(string path, XdbModel model)
        {
            var fileName = model + ".json";
            var filePath = Path.Combine(path, fileName);
            var json = Sitecore.XConnect.Serialization.XdbModelWriter.Serialize(model);
            File.WriteAllText(filePath, json);
            Console.WriteLine($"Serialized Xdb model {filePath}");
        }
    }
}
