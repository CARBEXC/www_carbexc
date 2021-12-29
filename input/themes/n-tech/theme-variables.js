/*
 * Custom function used to generate the output of the theme variables
 */

var generateThemeVariables = function(params) {
   let output = '';

      output += ` 
         :root {
            --page-width:         ${params.pageWidth}; 
            --page-margin:        ${params.pageMargin};
            --entry-width:        ${params.entryWidth}; 
            --sidebar-width:      ${params.sidebarWidth}; 
            --header-height:      ${params.navbarHeight}; 
            --logo-color:         ${params.logoColor}; 
            --primary-color:      ${params.primaryColor};   
            --text-color:         ${params.textColor}; 
            --headings-color:     ${params.headingColor}; 
            --link-color:         ${params.linkColor}; 
            --link-color-hover:   ${params.linkHoverColor}; 
            --bg-color:           ${params.primaryColor.replace('#', '').match(/[a-f0-9]{2,2}/gmi).map(n => parseInt(n, 16)).join(', ')};
            --separator-width:    ${params.separatorWidth}%;
            --line-height:        ${params.lineHeight}; 
            --font-weight-normal: ${params.fontNormalWeight}; 
            --font-weight-bold:   ${params.fontBoldWeight}; 
            --headings-weight:    ${params.fontHeadignsWeight};
            --headings-transform: ${params.fontHeadingsTransform};
      }`;  

   return output;
}

module.exports = generateThemeVariables;