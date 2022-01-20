// Refactor the code below. By refactor we mean that you 
// should reorganize the code to reduce the unnecessary complexity, and i
// mprove readability.  

// In this process you 
// should not modify the way the code functions. 
// Do not create functions or new constants, simply refactor the code.

if (recipe == 'SPANISH') {
  fudge = SPANISH_FUDGE;
  amt = base * SPANISH_FUDGE;
} 
if (recipe == 'FRENCH') {
  fudge = FRENCH_FUDGE;
  amt = base * fudge;
  chocolate = 7;
} 
if (recipe == 'ENGLISH') {
  fudge = ENGLISH_FUDGE;
  amt = base * fudge;
} 
else {
  fudge = 1;
  amt = base;
}
sugar = 2 * bottom(amt) + top(amt) * 1.17;