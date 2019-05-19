<template>
<div class ="row">
    <div class="col-sm-12">
        <div class="card-box">
            <div clas="row">
                <div class = "col-xl-6">
                    <h4 class="header-title m-t-0 m-b-30">Registro</h4>
                    <form action="#" data-parsley-validate novalidate>
                        <div class="form-group">
                            <label for="userName">User Name*</label>
                            <input type="text" name="nick" parsley-trigger="change" required
                                placeholder="Enter user name" class="form-control" id="userName">
                        </div>
                        <div class="form-group">
                            <label for="emailAddress">Email address*</label>
                            <input type="email" name="email" parsley-trigger="change" required
                                placeholder="Enter email" class="form-control" id="emailAddress">
                        </div>
                        <div class="form-group">
                            <label for="pass1">Password*</label>
                            <input id="pass1" type="password" placeholder="Password" required
                                class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="passWord2">Confirm Password *</label>
                            <input data-parsley-equalto="#pass1" type="password" required
                                placeholder="Password" class="form-control" id="passWord2">
                        </div>
                        <div class="form-group text-right m-b-0">
                            <button class="btn btn-primary waves-effect waves-light" type="submit">
                                Submit
                            </button>
                            <button type="reset" class="btn btn-secondary waves-effect waves-light m-l-5">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
                <div class="col-xl-6">
                    <h5 class="m-b-5"><b>Range validation</b></h5>
                    <p class="text-muted font-13 m-b-30">
                        Your awesome text goes here.
                    </p>
                    <form class="form-horizontal group-border-dashed" action="#">
                        <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Min Length</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" required
                                    data-parsley-minlength="6" placeholder="Min 6 chars."/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
   
</template>

<script>
export default {
    name: "Register",

}
</script>

<style>

</style>
