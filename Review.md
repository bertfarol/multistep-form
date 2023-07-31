use this basic folder structure for generic resources

src/assets - assets like images, svgs, etc.
src/components - reusable components
src/containers - stateful components. sometimes you can use src/pages or src/views
src/hooks - custom hooks
src/utils - utilities

other generic folder structures are used depends on the use-case

src/pages - mostly for SPA apps. does not apply to new nextJs structure
src/views - mostly for apps
src/windows - for desktop apps
src/store - 
src/styles - for global styles
src/themes - for theming
src/types - for typescript types
src/hoc - for high order components
src/context - for contexts
src/i18n - for localisation files

suggested component folder tree structure guide - up to you on how to systematically create the structure

components/ComponentName/index.jsx - main Component file
components/ComponentName/SubComponent.jsx - sub component file use only by main component. create another main component if it will be used by other components
components/styles.js/scss/css or components/styles/index.js/scss/css - styles file used by main component

* Note: components/ComponentName/index.jsx can be imported as 
import ComponentName from '../components/ComponentName' - this will be reference automatically to index

