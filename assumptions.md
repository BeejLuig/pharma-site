# Assumptions

**Background**  
- opted for an off-white background surrounding the main content. That was based on my understanding of the responsive spec.

**Top Nav**  
- Used a `<br>` to maintain line-break for elements ("Prescribing Information", "Medication Guide", etc.) in the mobile view. That makes the line-break consistent in the desktop view, which differs from the psd. Would refactor with more time.

**Hamburger Menu**  
- The collapsible menu only has inner content for the first ("Learn about LORUM") drop-down. 
- I chose to use the jQuery `slideToggle` method for an added effect when opening the collapsible menu

**Links**  
- All links have an href of "#". Presumably they would navigate to other parts of the site.

**Header/Footer Logos**  
- Because of the logo placement in the psd, I opted for absolute positioning to match as closely as possible. There is likely a better way, but this was the fastest

**Callouts**  
- The responsive spec says that media does not resize, but I made a slight exception for the callout components. A max-width of 400px seemed reasonable, so at the smallest allowable window size, the callouts resize to 300px. 

**Copy**  
- Between the mobile and desktop views, the copy was slightly different. Of note, the copy inside of the callouts wasn't quite the same, and some copy in the desktop view was orange. I chose not to alter copy content based on window size. 

**File Structure**  
- The most up-to-date code for this project lives in the `gh-pages` branch on [github](https://github.com/BeejLuig/pharma-site/tree/gh-pages). The file structure was originally organized in folders (as can be seen in the [master branch](https://github.com/BeejLuig/pharma-site)), but I moved some files into the root directory because of issues with how GitHub pages handles relative links for project sites. With a little more time I would have re-organized the file structure. 