// for(let i = 0; i <$('.tab-button').length;i++ )
// {
    
// }


document.querySelector('.list').addEventListener('click',function(e){
    OnTab(e.target.dataset.id)
    
});


function OnTab(num)
{
    $('.tab-button').eq(num).on('click', function(){
        $('.tab-button').removeClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-button').eq(num).addClass('orange');
        $('.tab-content').eq(num).addClass('show');
    });
}