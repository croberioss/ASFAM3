$(function(){
  if ($.fn.mask) $('#telefone').mask('(00) 00000-0000');
  if ($.fn.validate){
    $('#form-contato').validate({
      rules:{ nome:{required:true,minlength:2}, email:{required:true,email:true}, mensagem:{required:true,minlength:10}},
      submitHandler:function(form,e){
        e.preventDefault();
        $('#form-feedback').removeClass('d-none');
        form.reset();
      }
    });
  }
});