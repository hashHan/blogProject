<template>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
          <!-- Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work. -->
          <!-- WARNING: Some web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address! -->
          <!-- To use the contact form, your site must be on a live web host with PHP! The form will not work locally! -->
          <form name="sentMessage" id="contactForm" novalidate>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label>Name</label>
                <input type="text" class="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name.">
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label>Email Address</label>
                <input type="email" class="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address.">
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group col-xs-12 floating-label-form-group controls">
                <label>Phone Number</label>
                <input type="tel" class="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number.">
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label>Message</label>
                <textarea rows="5" class="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <br>
            <div id="success"></div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary" id="sendMessageButton">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.floating-label-form-group {
  font-size: 14px;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 0.5em;
  border-bottom: 1px solid gray;
}
input,
textarea {
    font-size: 1.5em;
    position: relative;
    z-index: 1;
    padding: 0;
    resize: none;
    border: none;
    border-radius: 0;
    background: none;
    box-shadow: none !important;
}
label {
    font-size: 0.85em;
    line-height: 1.764705882em;
    position: relative;
    z-index: 0;
    top: 2em;
    display: block;
    margin: 0;
    -webkit-transition: top 0.3s ease, opacity 0.3s ease;
    -moz-transition: top 0.3s ease, opacity 0.3s ease;
    -ms-transition: top 0.3s ease, opacity 0.3s ease;
    transition: top 0.3s ease, opacity 0.3s ease;
    opacity: 0;
}
.help-block {
    margin: 15px 0;
}
.floating-label-form-group-with-value label{
    top: 0;
    opacity: 1;
}
.floating-label-form-group-with-focus label {
    color: primary;
}
form .form-group:first-child .floating-label-form-group {
  border-top: 1px solid gray;
}
</style>
