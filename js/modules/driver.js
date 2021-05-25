const driver = new Driver({
  opacity: 1,
  stageBackground: '#ffffff',
  animate: false,

});
driver.defineSteps([
  {
    element: '.catSlct',
    popover: {
      title: 'Title on Popover',
      description: 'Body of the popover',
      position: 'right'
    }
  },
  {
    element: '.metSlct',
    popover: {
      title: 'Title on Popover',
      description: 'Body of the popover',
      position: 'right'
    },
    onNext: () => {
      // Prevent moving to the next step
      driver.preventMove();
      
      // Perform some action or create the element to move to
      // And then move to that element
      setTimeout(() => {
        driver.moveNext();
      }, 4000);
    }
  },
  {
    element: '#third-element-introduction',
    popover: {
      title: 'Title on Popover',
      description: 'Body of the popover',
      position: 'right'
    }
  },


])

driver.start();
