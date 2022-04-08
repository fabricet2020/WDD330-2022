   function fnSubmitForm() {

            if (isFormValid()) {

              alert("Your form fields are validated. Now you can implement insert logic");

                //$.ajax({
                //    dataType: "jsonp",
                //    url: "/your-handler-or-page.ashx",
                //    data: $("#form1").serialize(),
                //    type: "POST",
                //    async: false,
                //    success: function (result) {
                //        //success
                //    },
                //    error: function () {
                //        alert("There has been an error on server. Please try after some time.");
                //    }
                //});
            }

        }



        function isFormValid() {

            //Initially default values;
            errorMessage = "";
            $(".error").html("");
            var isValid = true;
            var regName = /^[a-zA-Z ]+$/

            //Validate First name
            if ($("#fname").val() == "") {
                $("#fname").siblings(".error").html("Please Enter First Name")                
                isValid = false;
            }
            else {

                if (!regName.test($("#fname").val())) {
                    $("#fname").siblings(".error").html("Please Enter Valid First Name")
                    isValid = false;
                }

            }

            //Validate Last name
            if ($("#lname").val() == "") {
                $("#lname").siblings(".error").html("Please Enter Last Name")
                isValid = false;
            } else {

                if (!regName.test($("#lname").val())) {
                    $("#lname").siblings('.error').html("Please Enter Valid Last Name")
                    isValid = false;
                }
            }


            //Validate country name
            if ($("#country").val() == "") {
                $("#country").siblings(".error").html("Please Select Country")
                isValid = false;
            }

            //Validate subject name
            if ($("#subject").val() == "") {
                $("#subject").siblings(".error").html("Please Enter Subject")
                isValid = false;
            }

            return isValid;

        }