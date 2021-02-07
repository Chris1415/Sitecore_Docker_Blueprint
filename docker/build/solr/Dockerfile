# escape=`

ARG PARENT_IMAGE

FROM ${PARENT_IMAGE}

# Add Foundation Recipes solr module
COPY \cores\recipes \recipe_data
RUN C:\Add-SolrCores.ps1 -SolrPath C:\solr -SolrSchemaPath C:\recipe_data\managed-schema -SolrCoreNames 'recipes_master_index,recipes_web_index'; `
    Remove-Item -Path C:\recipe_data -Recurse -Force;