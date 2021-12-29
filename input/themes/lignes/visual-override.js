/*
 * Custom function used to generate the output of the override.css file
 */

var generateOverride = function (params) {
        let output = '';

        if (params.minFontSize !== '1.1' || params.maxFontSize !== '1.25') {
                output += `
                html {
                        font-size: ${params.minFontSize}rem;
                }

                @media screen and (min-width: 20rem) {
                        html {
                                font-size: calc(${params.minFontSize}rem + (${params.maxFontSize} - ${params.minFontSize}) * ((100vw - 20rem) / 140));
                        }
                }

                @media screen and (min-width: 160rem) {
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

        if(params.galleryZoom !== true) {
                output += `   
                .pswp--zoom-allowed .pswp__img {
                        cursor: default !important  
                }`;    	 
        }

        if (params.lazyLoadEffect === 'fadein') {
                output += ` 
                img[loading] {
                        opacity: 0;
                }

                img.is-loaded {
                        opacity: 1;
                        transition: opacity 1s cubic-bezier(0.215, 0.61, 0.355, 1), transform .6s ease-out, filter .6s ease-out; 
                }`;
        }

        if(params.createSearchPage) {
                output += ` 
                 .search-page table { 
                       border: none;
                       margin: 0;
                 }
          
                 .search-page table td { 
                       border: none;
                       padding: 0;
                 }
          
                 .cse .gsc-control-cse, .gsc-control-cse {
                       background: none !important;
                       border: none!important;
                 }
          
                 .gsc-above-wrapper-area {
                       border-color: var(--dark) !important;
                 }
          
                 .gsc-above-wrapper-area-container,
                 .gsc-table-result {
                     border: none;
                       display: inline-table;
                       margin-top: 0;
                       white-space: normal;
                 }
        
                 .gsc-above-wrapper-area-container {
                     margin-bottom: 0;
                 }
        
                 .cse .gsc-control-cse, .gsc-control-cse {
                       padding: 0 !important;
                 }
          
                 .gsc-thumbnail-inside,
                 .gsc-url-top {
                       padding: 0 !important;
                 }
          
                 .gsc-control-cse, .gsc-control-cse .gsc-table-result {
                       font-family: var(--body-font) !important;  
                       font-size: 0.8239746086rem !important;
                 }
          
                 .gs-title  {       
                       font-weight: var(--font-weight-bold);         
                       height: auto !important; 
                       text-decoration: none !important; 
                 }
          
                 .gsc-webResult.gsc-result, .gsc-results .gsc-imageResult {
                       background: none!important;
                       border: none !important;
                       border-bottom: 1px solid var(--light)!important;
                 }
          
                 .gsc-webResult .gsc-result {
                       padding: var(--magic-number) 0 !important;  
                 }
          
                 .gs-webResult .gs-snippet, .gs-imageResult .gs-snippet, .gs-fileFormatType {
                       color: var(--text-color) !important;
                 }
          
                 .gs-webResult.gs-result a.gs-title:link, .gs-webResult.gs-result a.gs-title:link b, .gs-imageResult a.gs-title:link, .gs-imageResult a.gs-title:link b {
                      color: var(--link-color)!important; 
                 }
          
                 .gs-webResult.gs-result a.gs-title:hover, .gs-webResult.gs-result a.gs-title:hover b, .gs-imageResult a.gs-title:hover, .gs-imageResult a.gs-title:hover b {
                       color: var(--link-color-hover)!important; 
                 }
          
                 .gs-result .gs-title,
                 .gs-result .gs-title * {
                       color: var(--dark)!important;
                       font-size: 1rem !important;
                       text-transform: uppercase;
                 }
          
                 .gsc-results .gsc-cursor-box {
                       margin: 1.7rem 0 3rem!important;
                 }
          
                 .gsc-results .gsc-cursor-box .gsc-cursor-page {
                       background: none!important;
                       border: none!important;
                       color: var(--dark)!important;
                       font-size: 1rem;
                       padding: .5rem 1.075rem; 
                 }
          
                 .gsc-results .gsc-cursor-box .gsc-cursor-current-page {
                       background: var(--color)!important;            
                       color: var(--white)!important;               
                 }
          
                 .gsc-results .gsc-cursor-box .gsc-cursor-page {
                      border-radius: var(--border-radius)!important;
                      padding: 0.75rem 1.375rem !important;
                 }
                 .gsc-results .gsc-cursor-box .gsc-cursor-page:hover {
                       background: rgba(0,0,0, 0.05)!important;
                       color: var(--gray)!important;              
                       text-decoration: none !important;
                 }
          
                 .gcsc-foot {
                       margin-top: 3.4rem;
                 }
          
                 .gsc-table-result, .gsc-thumbnail-inside, .gsc-url-top {
                       padding-left: 0 !important;
                 }
                 .gsc-result-info-container {
                        border: none !important;
                       padding-left: 0;
                       padding-right: 0;
                 }

                 .gsc-orderby-container {
                        border: none !important;
                  }
        
                 .gsc-result-info,
                 .gsc-orderby-label {
                       color: var(--text-color) !important;
                       padding: 0 !important;
                 }
          
                 .gsc-orderby-label {
                       font-size: 13px;
                 }
          
                 .gcsc-find-more-on-google {
                      margin-left: 0 !important;
                      margin-top: 1rem;
                 }
                 
                 .gs-webResult div.gs-visibleUrl {
                       color: var(--text-color) !important;
                       font-family: var(--heading-font);
                       font-size: 16px;
                       opacity: .55;
                 }
        
                 .gs-result .gs-title *, .gsc-cursor-page, .gs-spelling a {
                       color: var(--link-color) !important;
                 }
          
                 .gs-webResult div.gs-visibleUrl-long, .gs-promotion div.gs-visibleUrl-long {
                       display: none!important;         
                }`;    	 
            }	

        return output;
}

module.exports = generateOverride;