package com.rentatools.RentaTools.service;
import com.rentatools.RentaTools.entity.Reservation;
import com.rentatools.RentaTools.entity.User;
import com.rentatools.RentaTools.entity.dto.EmailDto;
import jakarta.activation.URLDataSource;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.time.format.DateTimeFormatter;

@Service
@RequiredArgsConstructor
public class EmailService {
    @Autowired
    private final JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    private String sender;

    public String sendMail(EmailDto details) {
        try {
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setFrom(sender);
            mailMessage.setTo(details.getRecipient());
            mailMessage.setText(details.getMessage());
            mailMessage.setSubject(details.getSubject());
            javaMailSender.send(mailMessage);
            return "Mail Sent Successfully...";
        }
        catch (Exception e) {
            System.out.println(e);
            return "Error while Sending Mail";
        }
    }


    public void sendEmailReservation(Reservation reservation) {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = null;
        String imageS3 = "https://rentatools-images.s3.us-east-2.amazonaws.com/RentatoolsConLogo.jpg";
        DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("dd.MM.yyyy");

        String Message = "<img src='" + imageS3 + "'>" +
                "<h1>¡Reserva de producto concretada!</h1>" +
                "<p>Hola, <strong>" + reservation.getUser().getName() + "</strong></p><br>" +
                "<p>Te informamos que la reserva del producto: <strong>" + reservation.getProduct().getName() + "</strong> ha sido confirmada.</p>" +
                "<p>La reserva es desde el día " + reservation.getReservationFrom().format(dateFormat) +
                " hasta el día " + reservation.getReservationTo().format(dateFormat) + ".</p><br>" +
                "<strong><h2>¡Gracias por confiar en RentaTools!</h2></strong><br>" +
                "<p>Por consultas o modificaciones de reservas comunicarse a: <strong>" +
                "<a href='mailto:reservas@rentatools.com.ar'>reservas@rentatools.com.ar</a></strong></p>" +
                "<p>Por otras consultas generales comunicarse a: <strong>" +
                "<a href='mailto:consultas@rentatools.com.ar'>consultas@rentatools.com.ar</a></strong></p>" +
                "<p>Adjuntamos un documento con los términos y condiciones.</p>";
        try {
            helper = new MimeMessageHelper(message, true, StandardCharsets.UTF_8.name());
            helper.setFrom(sender);
            helper.setTo(reservation.getUser().getEmail());
            helper.setSubject("Confirmación de reserva en Rentatools.");
            helper.setText(Message, true);
            URL url = new URL("https://rentatools-images.s3.us-east-2.amazonaws.com/T%C3%A9rminos+y+condiciones.docx");
            URLDataSource dataSource = new URLDataSource(url);
            helper.addAttachment("Términos-y-condiciones.docx", dataSource);
            javaMailSender.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        }
    }

    public void sendEmailRegistro(User user) {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = null;
        String imageS3 = "https://rentatools-images.s3.us-east-2.amazonaws.com/RentatoolsConLogo.jpg";

        String Message = "<img src='" + imageS3 + "'>" +
                "<h1>¡Se registró correctamente en RentaTools!</h1>" +
                "<p>Hola, <strong>" + user.getName() + "</strong></p><br>" +
                "<p>Bienvenido/a, para iniciar sesión utiliza la cuenta: <strong>" + user.getEmail() + "</strong>.</p><br>" +
                "<p>Ya puedes disfrutar de la plataforma y alquilar las herramientas o maquinaria que necesites.</p><br>" +
                "<strong><h2>¡Gracias por confiar en RentaTools!</h2></strong><br>" +
                "<p>Inicie sesión desde: <strong><a href='http://www.rentatools.com.ar/signIn'>Login RentaTools</a></strong></p>" +
                "<p>Por consultas o modificaciones de tu cuenta comunicate a: <strong>" +
                "<a href='mailto:cuentas@rentatools.com.ar'>cuentas@rentatools.com.ar</a></strong></p>" +
                "<p>Por otras consultas generales comunicarse a: <strong>" +
                "<a href='mailto:consultas@rentatools.com.ar'>consultas@rentatools.com.ar</a></strong></p><br><br><br>";
        try {
            helper = new MimeMessageHelper(message, true, StandardCharsets.UTF_8.name());
            helper.setFrom(sender);
            helper.setTo(user.getEmail());
            helper.setSubject("Confirmación de registro en Rentatools.");
            helper.setText(Message, true);
            //URL url = new URL(imageS3);
            //URLDataSource dataSource = new URLDataSource(url);
            //helper.addAttachment("image.jpg", dataSource);
            javaMailSender.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
        //} catch (MalformedURLException e) {
        //    throw new RuntimeException(e);
        }
    }
}
