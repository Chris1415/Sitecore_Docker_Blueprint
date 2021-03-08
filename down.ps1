[CmdletBinding(DefaultParameterSetName = "no-arguments")]
Param (
    [Parameter(HelpMessage = "Determines if the environment is cleaned up completly after shutting it down",
        ParameterSetName = "env-init")]
    [switch]$Clean
)

Write-Host "Shutting down Blueprint" -ForegroundColor Green
docker-compose down

if ($Clean) {
	Write-Host "Executing Cleanup" -ForegroundColor Green
	cd docker
	
	./clean.ps1
}