package br.com.exemplo;

import java.io.IOException;
import javax.servlet.*;
import javax.servlet.http.*;

public class DadosServlet extends HttpServlet {
    protected void doGet (HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        try {
            Thread.sleep(3000); //pausa dos 30s
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        String nome = "Débora Barbosa";
        String cpf = "000.000.000-00";
        String matricula = "20230011183";

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        String json= String.format("{\"nome\": \"%s\", \"cpf\": \"%s\", \"matricula\": \"%s\"}", nome, cpf, matricula);
        response.getWriter().write(json);

    }
}
