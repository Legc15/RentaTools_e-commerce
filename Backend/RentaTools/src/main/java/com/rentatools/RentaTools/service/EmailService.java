package com.rentatools.RentaTools.service;
import com.rentatools.RentaTools.entity.Reservation;
import com.rentatools.RentaTools.entity.dto.EmailDto;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

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
    public String sendMail2(EmailDto details) {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper;
        System.out.println(sender);

        try {
            mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
            mimeMessageHelper.setFrom(sender);
            mimeMessageHelper.setTo(details.getRecipient());
            mimeMessageHelper.setText(details.getMessage());
            mimeMessageHelper.setSubject(details.getSubject());
            FileSystemResource file = new FileSystemResource(new File(details.getAttachment()));
            mimeMessageHelper.addAttachment(file.getFilename(), file);
            javaMailSender.send(mimeMessage);
            return "Mail enviado correctamente.";
        }

        catch (MessagingException e) {
            return "Error en el envío del email.";
        }
    }

    public void sendEmailReservation(Reservation reservation) {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = null;
        String Message = "<h1>¡Reserva de herramienta concretada!</h1>" +
                "<p>Hola, </p>" + reservation.getUser().getName() +
                "<p>Te informamos que la reserva del producto: <strong>" + reservation.getProduct().getName() + "</strong> ha sido confirmada.</p>" +
                "<p>¡Gracias por tu reserva!</p>" +
                "<img src='cid:image1'>";
        try {
            helper = new MimeMessageHelper(message, true, StandardCharsets.UTF_8.name());
            helper.setTo(reservation.getUser().getEmail());
            helper.setSubject("Confirmación de reserva en Rentatools.");
            helper.setText(Message, true);
            String imagePath = "https://rentatools-images.s3.us-east-2.amazonaws.com/RentatoolsConLogo.jpg";
            helper.addInline("image1", new ClassPathResource(imagePath));

            javaMailSender.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
