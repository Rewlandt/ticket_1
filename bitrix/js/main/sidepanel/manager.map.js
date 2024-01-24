{"version":3,"sources":["manager.js"],"names":["BX","namespace","instance","Object","defineProperty","SidePanel","enumerable","get","topWindow","PageObject","getRootWindow","window","Instance","Manager","options","this","anchorRules","anchorBinding","openSliders","lastOpenSlider","opened","hidden","hacksApplied","pageUrl","getCurrentUrl","pageTitle","getCurrentTitle","titleChanged","fullScreenSlider","handleAnchorClick","bind","handleDocumentKeyDown","handleWindowResize","throttle","handleWindowScroll","handleTouchMove","handleSliderOpenStart","handleSliderOpenComplete","handleSliderCloseStart","handleSliderCloseComplete","handleSliderLoad","handleSliderDestroy","handleEscapePress","handleFullScreenChange","addCustomEvent","open","close","closeAll","destroy","hide","unhide","postMessage","postMessageAll","postMessageTop","handlePostMessageCompatible","sliderClassName","registerSliderClass","className","type","isNotEmptyString","getSliderClass","sliderClass","getClass","Slider","prototype","url","refineUrl","isHidden","topSlider","getTopSlider","isOpen","getUrl","slider","getLastOpenSlider","rule","getUrlRule","offset","getWidth","getCustomLeftBoundary","lastOffset","getLastOffset","Math","min","getMinOffset","getMaxOffset","setOffset","getCustomRightBoundary","rightBoundary","calculateRightBoundary","setCustomRightBoundary","applyHacks","success","resetHacks","immediately","callback","getOpenSliders","i","length","forEach","setTimeout","sliderToDestroy","getSlider","reload","count","getPreviousSlider","currentSlider","previousSlider","getSliderByWindow","getFrameWindow","getOpenSlidersCount","addOpenSlider","Error","push","removeOpenSlider","openSlider","splice","setLastOpenSlider","resetLastOpenSlider","adjustLayout","getOffset","match","util","remove_url_param","getPageUrl","location","pathname","search","hash","getPageTitle","title","document","IM","replace","enterFullScreen","getFullScreenSlider","container","body","requestFullscreen","webkitRequestFullScreen","msRequestFullscreen","mozRequestFullScreen","console","log","exitFullScreen","exitFullscreen","webkitExitFullscreen","msExitFullscreen","mozCancelFullScreen","getFullScreenElement","fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement","event","addClass","getOverlay","fireEvent","removeClass","unbind","scrollTo","pageScrollTop","createEvent","initEvent","dispatchEvent","source","eventId","data","sender","getSliderFromSource","sliderWindow","getWindow","onCustomEvent","MessageEvent","firePageEvent","fireFrameEvent","getFullName","bindAnchors","parameters","isArray","rules","addEventListener","error","trace","condition","m","isString","RegExp","isPlainObject","loader","isAnchorBinding","enableAnchorBinding","disableAnchorBinding","isActionAllowed","isDestroyed","hideOverlay","sameWidth","showShadow","hideOrDarkenCloseBtn","hidePrintBtn","hideExtraLabels","setOverlayAnimation","index","getLabel","moveAt","losePageFocus","setBrowserHistory","updateBrowserTitle","unhideOverlay","hideShadow","showOrLightenCloseBtn","cleanUpClosedSlider","removeCustomEvent","frameWindow","removeEventListener","isOnTop","canCloseByEsc","showExtraLabels","isPrintable","showPrintBtn","focus","resetBrowserHistory","disablePageScrollbar","bindEvents","applyPostHacks","resetPostHacks","enablePageScrollbar","unbindEvents","browser","IsMobile","scrollWidth","innerWidth","documentElement","clientWidth","style","paddingRight","pageYOffset","scrollTop","removeProperty","isDomNode","activeElement","blur","keyCode","preventDefault","centerX","centerY","clientHeight","element","elementFromPoint","hasClass","findParent","extractLinkFromEvent","target","which","ctrlKey","metaKey","a","nodeName","tag","href","getAttribute","anchor","link","isValidLink","isFunction","handler","emulateAnchorClick","Event","bubbles","cancelable","k","matches","hasStopParams","stopParameters","allowCrossDomain","ajax","isCrossDomain","mobileFriendly","validate","canChangeHistory","isLoaded","history","replaceState","getBrowserTitle","canChangeTitle","getTitle","isSelfContained","params","questionPos","indexOf","query","substring","param","getLastOpenPage","getCurrentPage"],"mappings":"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","file":"manager.map.js"}