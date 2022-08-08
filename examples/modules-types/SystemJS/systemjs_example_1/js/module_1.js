console.log('Module 1 is loaded');

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      console.log('Execution of module 1');
    }
  };
});
