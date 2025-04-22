package com.example.praticaajax2;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.io.IOException;


@WebServlet(name = "DemoraServlet", value = "/demora-servlet")
public class DemoraServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            Thread.sleep(5000); // demora de 5s
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        response.setContentType("text/plain");
        response.getWriter().write("Resposta após 5 segundos");
    }
}