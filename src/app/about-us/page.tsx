"use client";
import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import Image from "next/image";

function AboutUsPage() {
  return (
    <Container>
      <Typography>
        The National Authority for Network Services was established under Law
        No. 4 dated 25/2/2009, with the aim of organizing, coordinating, and
        facilitating work on the information network. The Authority primarily
        focuses on regulating electronic signature services, managing domain
        names under the Syrian top-level domains (sy., .سورية), and regulating
        the use of Internet Protocol addresses (IPs) for computer networks in
        Syria. Its main objective is to provide an enabling environment for the
        provision of advanced electronic services that contribute to the growth
        of the national economy.
      </Typography>
      <Typography variant="h5" component="h3" gutterBottom>
        General Objectives:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Regulating electronic signature services, domain name registration, and other activities related to electronic transactions and network services." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Contributing to the development of electronic services, enhancing the efficiency of business and financial transactions on the network." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Contributing to the regulation and monitoring of emergency situations on the network." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Contributing to the effectiveness of implementing network security and protection rules and regulations." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Supporting research and studies in the field of network services and encouraging the utilization of their results." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Transferring advanced technology in the field of information security and utilizing its benefits." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Promoting common interests related to network services activities." />
        </ListItem>
      </List>

      <Typography variant="h5" component="h3" gutterBottom>
        Tasks:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Specifying and regulating the systems related to electronic signature, organizing the provision of its services, and granting licenses to engage in these services." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Managing the Syrian top-level domains (.sy and .سورية) on the Internet, setting policies and regulatory rules for registering names under these domains." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Granting and managing licenses for authorized registrants to register names under the Syrian top-level domains, and verifying their compliance with the regulatory rules." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Developing specifications and standards for network and internet security and protection, and supervising compliance with them." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Establishing standards, controls, and regulations for the operation of websites on the internet and other information networks, and ensuring their proper implementation by website owners and hosting entities." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Managing the allocation of internet addresses in the Syrian Arab Republic and coordinating with relevant regional and international authorities." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Resolving disputes between licensees in the areas of the Authority's work through arbitration, in accordance with the applicable laws and regulations." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Coordinating with international organizations concerned with the Authority's activities." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Providing professional training and specialization in the field of information technology in general, information security and network protection, and data centers, both in the public and private sectors." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Establishing the organizational structure of the National Authority for Network Services." />
        </ListItem>
      </List>

      <Image
        src={"/images/aboutus.svg"}
        alt="Placeholder"
        width={200}
        height={400}
      />
    </Container>
  );
}

export default AboutUsPage;
