sap.ui.define([], function(){
    //문법 검사 엄격하게 진행해서, 오류가 있을 경우 웹페이지를 작동 중지 시키도록 하겠다.
    "use strict";

    return {
        classText: function( sClass ){

            //전달 받은 클래스가 F, C, Y인 경우 적절한 명칭을 결과값으로 변환하고
            //그 외는 전부 미확인 좌석으로 반환한다.

            switch( sClass) {
                case "F": return "퍼스트클라스";
                case "C": return "비즈니스";
                case "Y": return "이코노미";
                default:  return "미확인 좌석";
            }
        }
    }

});