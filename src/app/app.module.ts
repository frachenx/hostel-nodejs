import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { SidebarComboComponent } from './sidebar/sidebar-combo/sidebar-combo.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarDefaultComponent } from './sidebar/sidebar-default/sidebar-default.component';
import { RegistrationComponent } from './main/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './user/profile/profile.component';
import { UserLoginComponent } from './main/user-login/user-login.component';
import { AdminLoginComponent } from './main/admin-login/admin-login.component';
import { AddCourseComponent } from './admin/add-course/add-course.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { LogoutComponent } from './main/logout/logout.component';
import { ManageCoursesComponent } from './admin/manage-courses/manage-courses.component';
import { EditCourseComponent } from './admin/edit-course/edit-course.component';
import { AddRoomComponent } from './admin/add-room/add-room.component';
import { ManageRoomsComponent } from './admin/manage-rooms/manage-rooms.component';
import { StudentRegistrationComponent } from './admin/student-registration/student-registration.component';
import { ManageStudentsComponent } from './admin/manage-students/manage-students.component';
import { ViewStudentComponent } from './admin/view-student/view-student.component';
import { BookHostelComponent } from './user/book-hostel/book-hostel.component';
import { RoomDetailsComponent } from './user/room-details/room-details.component';
import { MyProfileComponent } from './user/my-profile/my-profile.component';
import { PasswordComponent } from './user/password/password.component';
import { EditRoomComponent } from './admin/edit-room/edit-room.component';


const routes:Routes=[
  {path:'registration',component:RegistrationComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'logout',component:LogoutComponent},
  {path:'add-course',component:AddCourseComponent},
  {path:'manage-courses',component:ManageCoursesComponent},
  {path:'edit-course/:id',component:EditCourseComponent},
  {path:'add-room',component:AddRoomComponent},
  {path:'manage-rooms',component:ManageRoomsComponent},
  {path:'edit-room/:id',component:EditRoomComponent},
  {path:'student-registration',component:StudentRegistrationComponent},
  {path:'manage-students',component:ManageStudentsComponent},
  {path:'view-student/:id',component:ViewStudentComponent},
  {path:'book-hostel',component:BookHostelComponent},
  {path:'room-details',component:RoomDetailsComponent},
  {path:'my-profile',component:MyProfileComponent},
  {path:'change-password',component:PasswordComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarItemComponent,
    SidebarComboComponent,
    SidebarComponent,
    SidebarDefaultComponent,
    RegistrationComponent,
    ProfileComponent,
    UserLoginComponent,
    AdminLoginComponent,
    AddCourseComponent,
    DashboardComponent,
    LogoutComponent,
    ManageCoursesComponent,
    EditCourseComponent,
    AddRoomComponent,
    ManageRoomsComponent,
    StudentRegistrationComponent,
    ManageStudentsComponent,
    ViewStudentComponent,
    BookHostelComponent,
    RoomDetailsComponent,
    MyProfileComponent,
    PasswordComponent,
    EditRoomComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
