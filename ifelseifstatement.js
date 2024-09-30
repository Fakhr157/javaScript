

  var per = 25;

  if (per >= 80 && per <= 100){
    document.write("You are in merit.");
  }else if(per >= 60 && per< 80){
    document.write("You are in first division");
  }else if(per >= 45 && per <60){
document.write("You are in 2nd division");
  }else if(per >= 33 && per <45){
    document.write("You are in 3rd division");
  }else if(per<33){
    document.write("You are Fail.");
  }else{
    document.write("Please Enter Valid Percent")
  }