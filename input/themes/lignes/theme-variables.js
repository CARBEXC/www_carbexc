/*
 * Custom function used to generate the output of the theme variables
 */

var generateThemeVariables = function(params) {
   let output = '';

      output += `   
         :root {
            --navbar-height:      4.2rem;
            --page-margin:        ${params.pageMargin};
            --page-width:         ${params.pageWidth};
            --entry-width:        ${params.entryWidth}; 
            --magic-number:       1.5rem;
            --slider-image-height: ${params.sliderImageHeight}; 
            --gallery-gap:        ${params.galleryItemGap}; 
            --cards-image-height: 16rem; 
            --pre-height:         ${params.codeMaxHeight}; 
            --line-height:        ${params.lineHeight}; 
            --font-weight-normal: ${params.fontNormalWeight}; 
            --font-weight-bold:   ${params.fontBoldWeight}; 
            --headings-weight:    ${params.fontHeadignsWeight};
            --headings-transform: ${params.fontHeadingsTransform};
            --letter-spacing:     normal;                          
      `; 

      if(params.colorScheme !== 'dark') {
         output += `             
            --white:              ${params.whiteLightColor}; 
            --white-rgb:          ${params.whiteLightColor.replace('#', '').match(/[a-f0-9]{2,2}/gmi).map(n => parseInt(n, 16)).join(', ')}; 
            --black:              ${params.blackLightColor}; 
            --dark:               ${params.darkLightColor}; 
            --gray:               ${params.grayLightColor}; 
            --light:              ${params.lightLightColor}; 
            --lighter:            ${params.lighterLightColor}; 
            --page-bg:            ${params.pageLightBg}; 
            --color:              ${params.primaryLightColor};   
            --text-color:         ${params.textLightColor};   
            --headings-color:     ${params.headingsLightColor}; 
            --link-color:         ${params.linkLightColor}; 
            --link-color-hover:   ${params.linkLightHoverColor};
            --inline-code:        ${params.codeLightColor.replace('#', '').match(/[a-f0-9]{2,2}/gmi).map(n => parseInt(n, 16)).join(', ')};
            --highlight-color:    #CACD1B;
            --info-color:         #88E0EF;
            --success-color:      #71CD1B;
            --warning-color:      #FF5151;
            `;
      }

      if(params.colorScheme === 'dark') {
         output += `             
               --white:              ${params.whiteDarkColor}; 
               --white-rgb:          ${params.whiteDarkColor.replace('#', '').match(/[a-f0-9]{2,2}/gmi).map(n => parseInt(n, 16)).join(', ')}; 
               --black:              ${params.blackDarkColor}; 
               --dark:               ${params.darkDarkColor}; 
               --gray:               ${params.grayDarkColor}; 
               --light:              ${params.lightDarkColor}; 
               --lighter:            ${params.lighterDarkColor}; 
               --page-bg:            ${params.pageDarkBg}; 
               --color:              ${params.primaryDarkColor};   
               --text-color:         ${params.textDarkColor};   
               --headings-color:     ${params.headingsDarkColor}; 
               --link-color:         ${params.linkDarkColor}; 
               --link-color-hover:   ${params.linkDarkHoverColor};             
               --inline-code:        ${params.codeDarkColor.replace('#', '').match(/[a-f0-9]{2,2}/gmi).map(n => parseInt(n, 16)).join(', ')};
               --highlight-color:    #FFC074;
               --info-color:         #74B3FF;
               --success-color:      #74FF7A;
               --warning-color:      #FF5151;
         `;
      }

      output += `
      }`; 

      output += `   
         @media all and (min-width: 120em) {
            :root {
               --navbar-height: 5.2rem;
            }
         }
         @media all and (min-width: 120em) {
            :root {
               --magic-number: 2rem;
            }
         }
         @media all and (min-width: 75em) {
            :root {
               --featured-image-height: 60vh;
            }
         }
         @media all and (min-width: 75em) {
            :root {
               --cards-image-height: 18rem;
            }
         }
         @media all and (min-width: 100em) {
            :root {
               --cards-image-height: 22rem;
            }
         }                        
      `; 

      if(params.colorScheme === 'auto') {
         output += ` 
            @media (prefers-color-scheme: dark) {
               :root {
                  --white:              ${params.whiteDarkColor}; 
                  --white-rgb:          ${params.whiteDarkColor.replace('#', '').match(/[a-f0-9]{2,2}/gmi).map(n => parseInt(n, 16)).join(', ')}; 
                  --black:              ${params.blackDarkColor}; 
                  --dark:               ${params.darkDarkColor}; 
                  --gray:               ${params.grayDarkColor}; 
                  --light:              ${params.lightDarkColor}; 
                  --lighter:            ${params.lighterDarkColor}; 
                  --page-bg:            ${params.pageDarkBg}; 
                  --color:              ${params.primaryDarkColor};   
                  --text-color:         ${params.textDarkColor};   
                  --headings-color:     ${params.headingsDarkColor}; 
                  --link-color:         ${params.linkDarkColor}; 
                  --link-color-hover:   ${params.linkDarkHoverColor};             
                  --inline-code:        ${params.codeDarkColor.replace('#', '').match(/[a-f0-9]{2,2}/gmi).map(n => parseInt(n, 16)).join(', ')};
                  --highlight-color:    #FFC074;
                  --info-color:         #74B3FF;
                  --success-color:      #74FF7A;
                  --warning-color:      #FF5151;
               }        
            }`;   
         }

   return output;
}

module.exports = generateThemeVariables;