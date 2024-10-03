import 'package:flutter/material.dart';
import 'package:networker/pages/home_page/home_page.dart';
import 'package:networker/pages/search_page/search_page.dart';
import 'package:networker/pages/notifications_page/notifications_page.dart';
import 'package:networker/pages/profile_page/profile_page.dart';



class BottomNavHomePage extends StatefulWidget {
  @override
  _BottomNavHomePageState createState() => _BottomNavHomePageState();
}

class _BottomNavHomePageState extends State<BottomNavHomePage> {
  int _currentIndex = 0;

  final List<Widget> _pages = [
    HomePage(),
    SearchPage(),
    NotificationsPage(),
    ProfilePage(),
  ];

  void onTabTapped(int index) {
    setState(() {
      _currentIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        // title: Text('Bottom Navigation Example'),
      ),
      body: _pages[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: onTabTapped,
        type: BottomNavigationBarType.fixed,
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.search),
            label: 'Search',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.notifications),
            label: 'Notifications',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: 'Profile',
          ),
        ],
      ),
    );
  }
}
