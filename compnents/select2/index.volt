<!DOCTYPE html>
<html>
<head>
    <h1>select 2</h1>

    <script src="assets/jquery/dist/jquery.min.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
    <link href="assets/src/select2totree.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>
    <script src="assets/src/select2totree.js"></script>

</head>
<body>
    <div id="selection-log"></div>
    <div id="test">
        <select id="selection"></select>
    </div>


<script>

    $(document).ready(function () {

        $('#selection').select2({
            width:'50%',
            placeholder: 'Select an option',
            closeOnSelect:false,
            allowClear:true,
            ajax: {
                url: '/multiple/index/index',
                dataType: 'json',
                processResults: function (data) {
                        return {
                            results: data
                        };
                }
            },
            templateResult: function(result) {
                return result.title + "<span class='level' data-val='" + result.level + "' ></span>" ;
            },
            templateSelection: function(selection) {
                return selection.title;
            },

            escapeMarkup: function (m) { return m; }
        });


        function log(e) {
            var e=$("<li>"+e+"</li>");
            $("#selection-log").append(e);
            e.animate({opacity:1}, 10000, 'linear', function() { e.animate({opacity:0}, 2000, 'linear', function() {e.remove(); }); });
        }
        $('#selection')
            .on("select2:open", function (e) {
                log("open", e);
                 $('.select2-container').find('.select2-dropdown')
                    .find('.select2-results').find('.select2-results__options')
                    .find("li[aria-disabled='true']").hide();

                })
            .on("change", function(e) {
                log("change "+JSON.stringify({val:this.value}));

            })
            .on("select2:select", function(e) {
                // log("select "+JSON.stringify({}));


                // var level =$('.select2-results__options').find("li[aria-selected=true]")
                //     .find('span[class=level]').attr("data-val");
                //
                // alert(level);

                //
                // if(level==0) {
                //     $('.select2-results__options').find("li[aria-selected=false]").hide();
                //
                //
                // }

                })

            .on("select2:close", function (e) { log("close", e); });
    });

</script>
</body>
</html>