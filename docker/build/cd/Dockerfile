# escape=`

ARG PARENT_IMAGE
ARG SOLUTION_IMAGE
ARG TOOLS_IMAGE

FROM ${SOLUTION_IMAGE} as solution
FROM ${TOOLS_IMAGE} as tools
FROM ${PARENT_IMAGE}

SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'SilentlyContinue';"]

WORKDIR C:\inetpub\wwwroot

# Copy developer tools and entrypoint
COPY --from=tools C:\tools C:\tools

# Copy solution website files
COPY --from=solution /artifacts/sitecore/ ./

# Copy solution transforms
COPY --from=solution \artifacts\transforms\ \transforms\solution\

# Copy role transforms
COPY .\transforms\ \transforms\role\

# Perform solution transforms
RUN Get-ChildItem \transforms\solution\Project\*\sitecore | ForEach-Object { & C:\tools\scripts\Invoke-XdtTransform.ps1 -Path .\ -XdtPath $_.FullName };  
    #Get-ChildItem \transforms\solution\Feature\*\sitecore | ForEach-Object { & C:\tools\scripts\Invoke-XdtTransform.ps1 -Path .\ -XdtPath $_.FullName }; `
    #Get-ChildItem \transforms\solution\Foundation\*\sitecore | ForEach-Object { & C:\tools\scripts\Invoke-XdtTransform.ps1 -Path .\ -XdtPath $_.FullName }; `

# Perform role transforms
RUN C:\tools\scripts\Invoke-XdtTransform.ps1 -Path .\ -XdtPath \transforms\role