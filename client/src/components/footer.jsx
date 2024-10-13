import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";

export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#003C43", color: "#ffffff", padding: "20px 0" }}>
            <Container>
                <Grid container spacing={2} justifyContent="space-between">
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body2">
                            We are dedicated to providing the best healthcare management solutions to improve patient care and streamline operations.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Typography variant="body2">
                            <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
                                Home
                            </Link>
                            <br />
                            <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
                                Services
                            </Link>
                            <br />
                            <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
                                Contact Us
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
                <Typography variant="body2" align="center" style={{ marginTop: "20px" }}>
                    &copy; {new Date().getFullYear()} Healthcare Management Solutions. All rights reserved.
                </Typography>
            </Container>
        </footer>
    );
}