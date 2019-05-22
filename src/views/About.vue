<template>
      <div class="row">
            <div class="col-xl-4">
                <div class="card-box">
                    <div class="widget-chart text-center">
                        <h4 class="header-title mt-0">Categorias</h4>
                        <div id="morris-donut-example" style="height: 245px;" class="morris-chart"></div>
                        <ul class="list-inline chart-detail-list mb-0">
                            <li class="list-inline-item">
                                <h5 style="color: #ff8acc;"><i class="fa fa-circle m-r-5"></i>teste</h5>
                            </li>
                            <li class="list-inline-item">
                                <h5 style="color: #5b69bc;"><i class="fa fa-circle m-r-5"></i>teste</h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
             <div class="col-xl-4">
                <div class="card-box">
                    <h4 class="header-title mt-0">Teste Estatiticas</h4>
                    <div id="morris-bar-example" style="height: 280px;" class="morris-chart"></div>
                </div>
             </div>
            <div class="col-xl-4">
                <div class="card-box">
                <h4 class="header-title mt-0">Mini Ranking</h4>
                    <div id="morris-line-example" style="height: 280px;" class="morris-chart"></div>
                    </div>
            </div>
        </div>
</template>

<script>
export default {
    name:"About"
}
</script>

<style>

</style>
