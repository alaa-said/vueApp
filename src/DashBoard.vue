<template>
    <div class="container-fluid">
        <div class="row DashBoard">
            <div class="Square ml-3">
                <div class="head text-left px-3">
                        <label> to do list </label>
                        <div class="d-inline float-right"> 
                                <span class="btn min" @click="ToggleClass($event)"> - </span>
                                <span class="btn max" @click="ToggleClass($event)"> + </span>
                                <span class="btn" @click="removeCard($event)"> x </span>
                        </div>
                </div>
                <div class="content p-3">
                        <p> task 1 </p>
                        <p> task 2 </p>
                        <p> task 3 </p>
                </div>
            </div>
              <div class="Square ml-4">
                <div class="head text-left px-3">
                        <label> Latest news </label>
                        <div class="d-inline float-right"> 
                                <span class="btn min" @click="ToggleClass($event)"> - </span>
                                <span class="btn max" @click="ToggleClass($event)"> + </span>
                                <span class="btn" @click="removeCard($event)"> x </span>
                        </div>
                </div>
                <div class="content p-3">
                       <p> task 1 </p>
                        <p> task 2 </p>
                        <p> task 3 </p>
                </div>
             </div>
              <div class="Square ml-3 mb-4">
                <div class="head text-left px-3">
                        <label> Tasks </label>
                        <div class="d-inline float-right"> 
                                <span class="btn min" @click="ToggleClass($event)"> - </span>
                                <span class="btn max" @click="ToggleClass($event)"> + </span>
                                <span class="btn" @click="removeCard($event)"> x </span>
                        </div>
                </div>
                <div class="content p-3">
                        <p> task 1 </p>
                        <p> task 2 </p>
                        <p> task 3 </p>
                </div>
             </div>
              <div class="Square ml-4">
                <div class="head text-left px-3">
                        <label> Tasks </label>
                        <div class="d-inline float-right"> 
                                <span class="btn min" @click="ToggleClass($event)"> - </span>
                                <span class="btn max" @click="ToggleClass($event)"> + </span>
                                <span class="btn" @click="removeCard($event)"> x </span>
                        </div>
                </div>
                <div class="content p-3">
                        
                        <p> task 1 </p>
                        <p> task 2 </p>
                        <p> task 3 </p>
                </div>
             </div>
        </div>
    </div>
</template>


<script>





export default{
    data(){
            
        return{
                //  isMax: " + ",
                //  IsMin: " - "
               // isDisabled: false
          }
    },
     methods: {
        ToggleClass: function (event) {
                event.target.parentElement.parentElement.parentElement.classList.toggle('MaxMize')
                this.isMax = " - "
        },
        removeCard: function () {
                 event.target.parentElement.parentElement.parentElement.style.display = "none";              
                },
    }


}

</script>



<style>
        .Square{
            width: 40%;
            border: 1px solid lightblue;
            height: 250px;
            margin-top:30px;
        }

        .MaxMize{
            position: absolute;
            height: 85%;
            width: 93%;
            background-color: aliceblue;
        }
        .head {
            padding-top: 5px;
            background-color: lightblue;
        }
        span.btn{
                background-color: #17a2b8;
                color: white;
                padding: 0px;
                padding-left: 6px;
                margin-left: 5px;
                padding-right: 6px;
        }
</style>