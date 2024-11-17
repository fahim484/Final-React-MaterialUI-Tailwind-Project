import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";

function Footer() {
  const footerData = [
    {
      title: "Home",
      links: ["Become Affiliate", "Go Unlimited", "Services"],
    },
    {
      title: "Products",
      links: [
        "Design Systems",
        "Themes & Templates",
        "Mockups",
        "Presentations",
        "Wireframes Kit",
        "UI Kits",
      ],
    },
    {
      title: "Legals",
      links: ["License", "Refund Policy", "About Us", "Contacts"],
    },
    {
      title: "Blog",
      links: ["Business Stories", "Digital Store", "Learning", "Social Media"],
    },
  ];

  const socialIcons = [
    { icons: <Facebook />, href: "#" },
    { icons: <Twitter />, href: "#" },
    { icons: <Instagram />, href: "#" },
  ];

  return (
    <Box sx={{ bgcolor: "#000000", pt: 10, pb: 3, color: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3} >
            <Typography>
              <img src="/Footer-Logo.png" alt="" />
            </Typography>
          </Grid>

          {footerData.map((section, index) => (
            <Grid item xs={6} md={2} key={index}>
              <Typography sx={{ fontWeight: "500", mb: 2, color: "#FFFFFF", fontSize: "20px", lineHeight: "24.2px" }}>
                {section.title}
              </Typography>
              {section.links.map((link, linkIndex) => (
                <Box
                  key={linkIndex}
                  display="block"
                  sx={{ my: 1 }}
                >
                  <Link href="#" color="#737373" underline="none" sx={{fontWeight: "500",fontSize: "18px", lineHeight: "20px"}}>{link}</Link>
                </Box>
              ))}
            </Grid>
          ))}
        </Grid>

        <hr style={{ color: "#C4C4C4", marginTop: "40px", marginBottom: "10px" }} />

          <Box display="flex" justifyContent="center">
            {socialIcons.map((icon, index) => (
              <IconButton key={index} href={icon.href} color="inherit">
                {icon.icons}
              </IconButton>
            ))}
          </Box>

          <Box mt={4} display="flex" justifyContent="center">
            <Typography color="#737373">
            © {new Date().getFullYear()} Degic. All Rights Reserved
            </Typography>
          </Box>

      </Container>
    </Box>
  );
}

export default Footer;
