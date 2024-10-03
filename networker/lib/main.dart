import 'package:flutter/material.dart';
import 'bottom_nav_home_page.dart';
void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Networker',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: BottomNavHomePage(),
    );
  }
}

