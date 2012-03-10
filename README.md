# jQuery Simple Slideshow

### Redonkulously simple jQuery slideshow

##### Markup like this:

    <div id="slideshow">
      <ul>
        <li>
          <img src="/images/slideshow/1.jpg">
        </li>
        <li>
          <img src="/images/slideshow/2.jpg">
        </li>
        <li>
          <img src="/images/slideshow/3.jpg">
        </li>
        <li>
          <img src="/images/slideshow/4.jpg">
        </li>
        <li>
          <img src="/images/slideshow/5.jpg">
        </li>
      </ul>
    </div>

##### Stylesheet like this: 

    #slideshow {
      height: 300px;
      position: relative; }
    #slideshow ul {
      margin: 0;
      padding: 0; }
    #slideshow ul li {
      list-style: none;
      margin: 0;
      padding: 0;
      position: absolute; }
    #slideshow ul li.current {
      z-index: 100; }

##### don't forget to include jQuery and boom™
