sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, myFormatter,Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("code.d01.exercise14.controller.Overview", {
        onInit() {
        },

        formatter:myFormatter,



        onCustomerChange: function (oEvent) {
            var oBindingContext = oEvent.getParameter("listItem").getBindingContext();
            this.byId("bookingTable").setBindingContext(oBindingContext);       
            sap.m.MessageToast.show(oBindingContext.getProperty("CustomerName")+" 고객님");
        },

        onFilterCustomers (oEvent) {
            // Filter 객체를 보관할 배열 선언
            var aFilter = [];
            //사용자가 SearchField에 입력한 검색조건을 가져온다
            //query에는 사용자가 입력한 검색조건이 들어있다.
            var sQuery = oEvent.getParameter("query");
            if( sQuery && sQuery.length > 0){
                //비교값2가 필요한 경우는 범위로 비교할 때, 예를 들어 From ~ To로 "c"부터 "e"까지와 같은 조건일 때
                //aFilter.push(new Filter(경로이름, 비교방법, 비교값1,비교값2))
                aFilter.push(new Filter( "CustomerName",FilterOperator.Contains, sQuery));
                console.log(aFilter);
                console.log(aFilter.length);
                //사용자가 입력한 검색조건이 포함된 고객명만 검색하겠다. 검색하는 조건을 배열에 추가한다.
            }
            //위에서 만든 aFilter에는 검색기준이 담겨있다. 이 검색기준을 통해서 고객 테이블에 특정 데이터만 촐력하기 위해
            //다음과 같이 고객 테이블에 aFilter를 적용한다.
            // var oTable = this.byId("customerTable");
            var oBinding = this.byId("customerTable").getBinding("items").filter(aFilter); // aggregation인 ittems는 테이블에 데이터를 취급하는 agg이므로
                                                        //이 agg의 바인딩 정보를 가져와서 filter를 적용한다.
            // oBinding.filter(aFilter);
        }
        
    });
});