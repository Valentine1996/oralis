/**
 * Created by valentyn on 5/25/17.
 */
$(function () {
    $(".tab-panels .tabs li").on('click', function () {
        $(".tab-panels .tabs li.active").removeClass('active');
        $(this).addClass("active");
        //figure out what panel to show
        var panelToShow = $(this).attr('rel');

        //hide current panel
        $(".tab-panels .panel.active").slideUp(300, showNextPanel);

        function showNextPanel() {
            $(this).removeClass("active");
            $("#" + panelToShow).slideDown(300, function () {
                $(this).addClass("active")
            });
        }
    });
});