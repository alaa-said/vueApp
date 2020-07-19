<template>
    <div class="container-fluid">
        <div class="row HomeCont">
             <div class="col-md-3 SideMenue">
                <div class="menue">
                <p>
                    <a href="/"> Dash board </a>
                </p>
                <p>
                    <a href="/add"> Add employee </a>
                </p>
                <p>
                    <a href="/search"> Dumy link </a>
                </p>
                </div>
            </div>
            <div class="col-md-9">
               
               <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style>
.HomeCont{
    min-height:82vh;
   
}
 .SideMenue{
            text-align: left;
            padding-left: 10% !important;
            padding-top: 3%;
            border-right: 1px solid #b5afaf;
    }
</style>