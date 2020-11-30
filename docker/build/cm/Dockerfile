# escape=`

ARG PARENT_IMAGE
ARG SOLUTION_IMAGE
ARG TOOLS_IMAGE
ARG MANAGEMENT_SERVICES_IMAGE
ARG HEADLESS_SERVICES_IMAGE
ARG SXA_IMAGE
ARG SPE_IMAGE

FROM ${SPE_IMAGE} as spe
FROM ${SXA_IMAGE} as sxa
FROM ${SOLUTION_IMAGE} as solution
FROM ${TOOLS_IMAGE} as tools
FROM ${MANAGEMENT_SERVICES_IMAGE} AS management_services
FROM ${HEADLESS_SERVICES_IMAGE} AS headless_services
FROM ${PARENT_IMAGE}

SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'SilentlyContinue';"]

WORKDIR C:\inetpub\wwwroot

# Copy developer tools and entrypoint
COPY --from=tools C:\tools C:\tools

# Copy the Sitecore Management Services Module
COPY --from=management_services C:\module\cm\content .\

# SPE
COPY --from=spe C:\module\cm\content .\

# SxA
COPY --from=sxa C:\module\cm\content .\
COPY --from=sxa C:\module\tools C:\module\tools
RUN C:\module\tools\Initialize-Content.ps1 -TargetPath .\; `
    Remove-Item -Path C:\module -Recurse -Force;
    
# Copy and init the JSS / Headless Services Module
COPY --from=headless_services C:\module\cm\content .\
COPY --from=headless_services C:\module\tools C:\module\tools
RUN C:\module\tools\Initialize-Content.ps1 -TargetPath .\; `
    Remove-Item -Path C:\module -Recurse -Force;

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