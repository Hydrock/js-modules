console.log('Module 2 is loaded');

System.register(['./module_3.js'], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      console.log('Execution of module 2');
    }
  };
});
