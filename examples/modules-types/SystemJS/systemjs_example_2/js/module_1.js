console.log('Module 1 is loaded');

System.register(['./module_2.js'], function (_export, _context) {
  return {
    setters: [function (_dep) {
      dep = _dep;
      console.log('dep:', dep);
    }],
    execute: function () {
      console.log('Execution of module 1');
    }
  };
});
