function makeRed(){
          document.body.style.backgroundColor='red';
  }
  
  // for blue button 
  
  const blueButton = document.getElementById("make-blue")
                    
  blueButton.onclick = makeBlue;
  
  
  function makeBlue(){
            
            document.body.style.backgroundColor='blue';
  }
  
  // for orange color
      
  const orangeButton = document.getElementById("make-orange")
                    
  orangeButton.onclick = makeOrange;
  
  
  function makeOrange(){
            document.body.style.backgroundColor='orange'
            
  }
  
  //Anonymous function
  
  const violetButton = document.getElementById("make-violet")
                    
                    
  violetButton.onclick = function(){
            
           document.body.style.backgroundColor='violet';
  }
  
  
  //Hndle eventListener
  
  const goldenrodButton = document.getElementById("make-goldenrod");
                   goldenrodButton.addEventListener('click', makeGoldenrod );
                   
                   function makeGoldenrod(){
                       document.body.style.backgroundColor='goldenrod'      
                    
                   }
                   
     //add eventlistner
    
    
    const hotPinkButton = document.getElementById('make-hotpink')
    hotPinkButton.addEventListener('click',function(){
              document.body.style.backgroundColor='pink';
    })

    
 //shorcut eventListner
 
 document.getElementById('make-cyan').addEventListener('click',function(){
        document.body.style.backgroundColor='cyan';
})
    