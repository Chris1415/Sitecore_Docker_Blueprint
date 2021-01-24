# escape=`

ARG PARENT_IMAGE
ARG SOLUTION_IMAGE
ARG TOOLS_IMAGE
ARG MANAGEMENT_SERVICES_IMAGE
ARG HEADLESS_SERVICES_IMAGE

FROM ${SOLUTION_IMAGE} as solution
FROM ${TOOLS_IMAGE} as tools
FROM ${MANAGEMENT_SERVICES_IMAGE} AS management_services
FROM ${HEADLESS_SERVICES_IMAGE} AS headless_services
FROM ${PARENT_IMAGE}

SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'SilentlyContinue';"]

WORKDIR C:\inetpub\wwwroot

# Copy developer tools and entrypoint
COPY --from=tools C:\tools C:\tools

# Copy XC Stuff
#COPY xdts c:/xdts
#COPY Permissions c:/Permissions
#COPY Content/Website/ wdp/ ./

# Copy the Sitecore Management Services Module
COPY --from=management_services C:\module\cm\content .\

# Copy solution website files
COPY --from=solution \artifacts\sitecore\ .\

# Copy solution transforms
COPY --from=solution \artifacts\transforms\ \transforms\solution\

# Copy role transforms
COPY .\transforms\ \transforms\role\

# Perform solution transforms
RUN Get-ChildItem \transforms\solution\Project\*\sitecore | ForEach-Object { & C:\tools\scripts\Invoke-XdtTransform.ps1 -Path .\ -XdtPath $_.FullName };  
    #Get-ChildItem \transforms\solution\Feature\*\sitecore | ForEach-Object { & C:\tools\scripts\Invoke-XdtTransform.ps1 -Path .\ -XdtPath $_.FullName }; `
    #Get-ChildItem \transforms\solution\Foundation\*\sitecore | ForEach-Object { & C:\tools\scripts\Invoke-XdtTransform.ps1 -Path .\ -XdtPath $_.FullName }; `

# Perform solution transforms (non-helix)
#RUN C:\tools\scripts\Invoke-XdtTransform.ps1 -Path .\ -XdtPath \transforms\solution\Project\Blueprint\sitecore

# Perform role transforms
RUN C:\tools\scripts\Invoke-XdtTransform.ps1 -Path .\ -XdtPath \transforms\role

#ADD https://dist.nuget.org/win-x86-commandline/v5.2.0/nuget.exe c:\tools

# XC Transforms
#RUN New-Item -Path C:\inetpub\wwwroot\App_Config -Name Security-Shared -ItemType directory; `
#    c:\tools\nuget.exe install Microsoft.Web.Xdt -Version 3.0.0 -OutputDirectory C:\tools -ExcludeVersion; `
#    C:\tools\scripts\Invoke-XdtTransform.ps1 -Path c:\inetpub\wwwroot -XdtPath c:\xdts -XdtDllPath c:\tools\Microsoft.Web.Xdt\lib\netstandard2.0\Microsoft.Web.XmlTransform.dll;`
#    Push-Location c:/inetpub/wwwroot/App_Config/Include/Y.Commerce.Engine; `
#    Rename-Item Sitecore.Commerce.Engine.DataProvider.config.disabled Sitecore.Commerce.Engine.DataProvider.config; `
#    Rename-Item Sitecore.Commerce.Engine.Connectors.Index.Common.config.disabled Sitecore.Commerce.Engine.Connectors.Index.Common.config; `
#    Rename-Item Sitecore.Commerce.Engine.Connectors.Index.Solr.config.disabled Sitecore.Commerce.Engine.Connectors.Index.Solr.config; `
#    Pop-Location; `
#    Remove-Item -Path "./XConnectFiles/" -Recurse -Force;

#SHELL ["C:\\LogMonitor\\LogMonitor.exe", "powershell.exe"]
									

# hadolint ignore=DL3025
#ENTRYPOINT $env:IIS_APPPOOL_IDENTITY = 'IIS AppPool\DefaultAppPool'; `
#        C:\tools\GrantWritePermission.ps1 -TargetFoldersFile 'C:\Permissions\AdditionalWriteAllowedFolders.txt' -User $env:IIS_APPPOOL_IDENTITY; `
#        if (-not (Test-Path C:\inetpub\wwwroot\App_Config\Security-Shared\Domains.config)) { Copy-Item -Path C:\inetpub\wwwroot\App_Config\Security\Domains.config -Destination C:\inetpub\wwwroot\App_Config\Security-Shared\Domains.config }; `
#        C:\ServiceMonitor.exe w3svc;