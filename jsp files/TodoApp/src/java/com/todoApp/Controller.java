package com.todoApp;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

//@WebServlet( name="controller",urlPatterns = {"/add-item"})


public class Controller extends HttpServlet{

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String todo = req.getParameter("todoItem");
        
        
        HttpSession session = req.getSession();
        
        List<String> todoList;
        if(session.getAttribute("todoList") != null){
            todoList = (List<String>) session.getAttribute("todoList");
        }
        else{
            todoList = new ArrayList<>();
        }
        
        todoList.add(todo);
        session.setAttribute("todoList", todoList);
        
        resp.sendRedirect("index.jsp");
    }
    
}