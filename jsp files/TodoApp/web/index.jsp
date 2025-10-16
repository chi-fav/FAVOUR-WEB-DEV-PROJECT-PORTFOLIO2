

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <headoi
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>My Todo App</title>
    </head>
    <body>
        <h1>Welcome to my Todo App</h1>
        <form action="add-item" method="post">
            <input type="text" name="todoItem" placeholder="add item"/>
            <button>Save</button>
        </form>
        
        <c:if test="${not empty todoList}">
            <h2>Todo</h2>
            <ul>
                <c:forEach items="${todoList}" var="todo">
                    <li>${todo}</li>
                </c:forEach>
            </ul>
        </c:if>
    </body>
</html>
