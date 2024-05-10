
function reload() {
  window.location.reload ()


}
//x in months
function expectedWeightInfant() {
    let expectedWeightAge = Number (document.getElementById ('expectedWeightAge').value)
    let infantWeight = ( (9 +expectedWeightAge) / 2)
    document.getElementById('expectedWeightAgeHeading').innerHTML = 'Expected weight is:'
    document.getElementById('expectedWeightAgeOutput').innerHTML = infantWeight
  }
  
  
  // //l in months

  function expectedLengthInfant() {
    let expectedLengthAge = Number (document.getElementById ('expectedLengthAge').value)
    let infantLength = (77 + 6*expectedLengthAge)
    document.getElementById('expectedLengthAgeHeading').innerHTML = 'Expected Length is:'
    document.getElementById('expectedLengthAgeOutput').innerHTML = infantLength
  }
  

  function expectedDentitionInfant() {
    let expectedDentitionAge = Number (document.getElementById ('expectedDentitionAge').value)
    let infantDentition = (expectedDentitionAge + 6)
    document.getElementById('expectedDentitionAgeHeading').innerHTML = 'Expected no of teeth is:'
    document.getElementById('expectedDentitionAgeOutput').innerHTML = infantDentition
  }

  
  // //y in years
  function expectedWeightChild() {
    let expectedWeightChildAge = Number (document.getElementById ('expectedWeightChildAge').value)
    if (expectedWeightChildAge < 7) {
      let childWeight = (2*expectedWeightChildAge + 8)
      document.getElementById('expectedWeightChildAgeOutput').innerHTML = childWeight
    } else {
      let childWeight = ((7*expectedWeightChildAge - 5)/2)
      document.getElementById('expectedWeightChildAgeOutput').innerHTML = childWeight
    } 

    
    document.getElementById('expectedWeightChildAgeHeading').innerHTML = 'Expected weight is:'
   
  }
  