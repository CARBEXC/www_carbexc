/*
 * Custom function used to generate the output of the override.css file
 */

var generateOverride = function (params) {
    let output = '';
    
    if (
        params.pageWidth !== '75rem' || 
        params.sidebarWidth !== '24rem' ||
        params.navbarHeight !== '4.8rem' || 
        params.logoColor !== '#000000' || 
        params.primaryColor !== '#EC1037' || 
        params.textColor !== '#000000' || 
        params.headingColor !== '#000000' || 
        params.linkColor !== '#EC1037' || 
        params.linkHoverColor !== '#000000' ||
        params.separatorWidth !== '100' ||
        params.lineHeight !== '1.7' || 
        params.fontNormalWeight !== '400' || 
        params.fontBoldWeight !== '700' || 
        params.fontHeadignsWeight !== '700' ||
        params.fontHeadingsTransform !== 'none') {
        output += `
        :root {
           --page-width:         ${params.pageWidth}; 
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
    }   

    if (params.minFontSize !== '1.1' || params.maxFontSize !== '1.1') {
        output += `
        html {
          font-size: ${params.minFontSize}rem;
        }

        @media screen and (min-width: 20rem) {
          html {
               font-size: calc(${params.minFontSize}rem + (${params.maxFontSize} - ${params.minFontSize}) * ((100vw - 20rem) / 55));
            }
        }

        @media screen and (min-width: 75rem) {
          html {
               font-size: ${params.maxFontSize}rem;
            }
        }`;
    }  
   
    if (params.submenu === 'custom') {
        output += `
        .navbar .navbar__submenu {
               width: ${params.submenuWidth}px;     
        }

        .navbar .navbar__menu--wide .has-submenu:active > .navbar__submenu,
        .navbar .navbar__menu--wide .has-submenu:focus > .navbar__submenu,
        .navbar .navbar__menu--wide .has-submenu:hover > .navbar__submenu  {
               min-width: ${params.submenuWidth}px;
        }

        .navbar .has-submenu .has-submenu:active > .navbar__submenu,
        .navbar .has-submenu .has-submenu:focus > .navbar__submenu,
        .navbar .has-submenu .has-submenu:hover > .navbar__submenu {
               left: ${params.submenuWidth}px;  
        }
        .navbar .has-submenu .has-submenu:active > .navbar__submenu.is-right-submenu,
        .navbar .has-submenu .has-submenu:focus > .navbar__submenu.is-right-submenu,
        .navbar .has-submenu .has-submenu:hover > .navbar__submenu.is-right-submenu {
               left: -${params.submenuWidth}px; 
        }`;
    }       
    

    if (params.postHeroHeight !== '60vh') {
        output += `
        .post__hero-image > img {
              height: ${params.postHeroHeight}        
        }`;
    }
    
    if (params.editorPicksBigImageHeight !== '38rem') {
        output += `
        .editor-picks .card__image--big {
              height: ${params.editorPicksBigImageHeight}        
        }`;
    }

    if (params.galleryItemGap !== '0.28333rem') {
        output += `
        .gallery {
               margin: calc(1.7rem + 1vw) -${params.galleryItemGap};
        }
        .gallery__item {
               padding: ${params.galleryItemGap};
        }
        
        .gallery__item a::after {
               bottom: ${params.galleryItemGap};
               height: calc(100% - ${params.galleryItemGap} * 2);              
               left: ${params.galleryItemGap};
               right: ${params.galleryItemGap};
               top: ${params.galleryItemGap};
               width: calc(100% - ${params.galleryItemGap} * 2);  
        }`;
    }
    
    if(params.createSearchPage) {
        output += ` 
         .page--search table { 
               border: none;
               margin: 0;
         }

         .page--search table td { 
               border: none;
               padding: 0;
         }

         .gsc-above-wrapper-area-container,
         .gsc-table-result {
               display: inline-table;
               margin-top: 0;
               white-space: normal;
         }

         .cse .gsc-control-cse, .gsc-control-cse {              
               padding: 0 !important;
         }

         .gsc-thumbnail-inside,
         .gsc-url-top {
               padding: 0 !important;
         }

         .gsc-control-cse, .gsc-control-cse .gsc-table-result {
               font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif !important;  
               font-size: 0.8888rem !important;
         }

         .gs-title  {       
               font-size: 1rem!important; 
               font-weight: bold;
               height: auto !important; 
               margin-bottom: 0.26667rem;
               text-decoration: none !important; 
               text-align: left;
         }

         .gsc-url-top {
                font-size: 0.7242rem;
         }

         .gsc-result{
               border-bottom: 1px solid #E3E3E3 !important; 
               padding: calc(1.13332rem + .5vw) 0 !important; 
 
        }`;    	 
    }	

    if(params.galleryZoom !== true) {
      output += `   
      .pswp--zoom-allowed .pswp__img {
         cursor: default !important  
      }`;    	 
    }    

    if(params.lazyLoadEffect === 'fadein') {
        output += ` 
         img[loading] {
               opacity: 0;
         }

         img.is-loaded {
               opacity: 1;
               transition: opacity 1s cubic-bezier(0.215, 0.61, 0.355, 1); 
         }`;    	 
    } 

    return output;
}

module.exports = generateOverride;
