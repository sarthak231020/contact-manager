package com.govinda.scm.controllers;

import org.springframework.boot.Banner;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {

    @RequestMapping("/home")
    public String home(Model model)
    {
        System.out.println("Home page ");

        // this is how we send the dynamic data from model to view.........
        // Make sure you use exact key which we are specifying here........
        model.addAttribute("Name","Govinda Saxena");
        model.addAttribute("LinkedIn","The Linked In website is bit blue");
        model.addAttribute("Google","https://google.com");

        return "home";
    }

    

    @RequestMapping("/about")
    public String about(Model model)
    {
        System.out.println("About page is loading.....");
        model.addAttribute("isLoggedIn", false);
        return "about";
    }

    @RequestMapping("/service")
    public String service()
    {
        System.out.println("Service page is loading.....");
        return "service";
    }

    @RequestMapping("/child1")
    public String childOne()
    {
        // For testing the page layout things....
        System.out.println("This is child one page...");
        return "child";
    }

    @RequestMapping("/child2")
    public String childTwo()
    {
        // For testing the page layout things....
        System.out.println("This is child two page...");
        return "child2";
    }
}
