
<section class="white" id="contact">
	<div class="container-fluid">
		<div class="row">
			<div class="column col-12 col-lg-10 offset-lg-1">
				<h5>Get in touch</h5>
				<h1>Contact us</h1>
				<?php

				if (isset($_POST['submit'])) :
					$name = $_POST['name'];
					$email = $_POST['email'];
					$project_name = $_POST['project_name'];
					$message = $_POST['message'];

					$mail = new PHPMailer(true);

					try {
						//Server settings
						// $mail->SMTPDebug = SMTP::DEBUG_SERVER;                   //Enable verbose debug output
						$mail->isSMTP();                                            //Send using SMTP
						$mail->CharSet    = 'UTF-8';                                //Charset
						$mail->Encoding   = 'base64';                               //Encoding (hopefully fixes the gibberish)
						$mail->Host       = 'smtp.sendgrid.net';                    //Set the SMTP server to send through
						$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
						$mail->Username   = 'apikey';
						$mail->Password   = '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';
						$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
						$mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

						//Recipients
						$mail->setFrom('info@charli3.io', 'Charli3 Web');
						$mail->addAddress('info@charli3.io', 'Charli3');
						$mail->addReplyTo($email, $name);

						//Content
						$mail->isHTML(true);                                  //Set email format to HTML
						$mail->Subject = 'Charli3 contact from: ' . $name;
						$mail->Body    = '<strong>Name:</strong> ' . $name . '<br />' .
						                 '<strong>Email:</strong> ' . $email . '<br />' .
						                 '<strong>Project name:</strong> ' . $project_name . '<br />' .
						                 '<strong>Message/Project description:</strong> ' . $message;

						$mail->send();
						echo '<p>Thank you for contacting us. Your message has been sent!</p>';
					} catch (Exception $e) {
						echo 'Message could not be sent. Mailer error: {$mail->ErrorInfo}';
					}

				else : ?>
					<form class="contact-form" method="post" action="index.php">
						<div class="form-group">
							<label for="contact-name">Name **</label>
							<input id="contact-name" type="text" name="name" placeholder="Your name" required>
						</div>
						<div class="form-group">
							<label for="contact-email">Email *</label>
							<input id="contact-email" type="email" name="email" placeholder="Your email" required>
						</div>
						<div class="form-group">
							<label for="contact-project-name">Project name</label>
							<input id="contact-project-name" type="text" name="project_name" placeholder="Your project's name">
						</div>
						<div class="form-group">
							<label for="contact-message">Project description or message *</label>
							<textarea id="contact-message" name="message" placeholder="Your project's description or message" rows="10" required></textarea>
						</div>
						<div class="form-group">
							<input type="submit" name="submit" value="Send">
						</div>
					</form>

				<?php endif; ?>
				
			</div>
		</div>
	</div>
</section>