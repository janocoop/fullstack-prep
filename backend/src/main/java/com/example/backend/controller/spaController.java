package com.example.backend.controller;

        import lombok.RequiredArgsConstructor;
        import org.springframework.web.bind.annotation.GetMapping;
        import org.springframework.web.bind.annotation.RestController;
        import org.springframework.web.servlet.view.RedirectView;

@RestController
@RequiredArgsConstructor
public class spaController {

    @GetMapping("/")
    public RedirectView redirectToHtml() {
        return new RedirectView("/index.html");
    }

}

