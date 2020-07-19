<template>
    <div class="container-fluid">   
        <nav class="navbar navbar-expand-lg navbar-light bg-info">
            <a class="navbar-brand" href="#">  <img src="./assets/images/logo.png" width="30" height="30" alt=""></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#"><span class="ml-5"> {{ Ddate}} </span></a>
                </li>     
                </ul>
                <span class="navbar-text">           
                    <a class="nav-link dropdown-toggle d-inline" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Ahmed mohamed adel
                    </a>
                    <div class="dropdown-menu UserMenue" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#"> Profile </a>
                        <a class="dropdown-item" href="#"> Logout </a>
                    </div>
                    <img src="./assets/images/user.png" width="30" height="30" alt="">  
                </span>
            </div>
        </nav>
    </div>
</template>

<script>
export default{
    data(){
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return{
            Ddate : new Date().getDate() + '  ' + monthNames[new Date().getMonth()] + '  ' +  new Date().getFullYear()            
        }
    }
}
</script>

<style>
.dropdown-menu.UserMenue{
    left:84% !important;
}
</style>