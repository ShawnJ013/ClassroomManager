namespace ClassroomManager.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Classes",
                c => new
                    {
                        ClassId = c.Int(nullable: false, identity: true),
                        TeacherId = c.Int(),
                        Name = c.String(),
                        Description = c.String(),
                        IsNightClass = c.Boolean(nullable: false),
                        StartDate = c.DateTime(nullable: false),
                        EndDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.ClassId)
                .ForeignKey("dbo.Teachers", t => t.TeacherId)
                .Index(t => t.TeacherId);
            
            CreateTable(
                "dbo.Enrollments",
                c => new
                    {
                        ClassId = c.Int(nullable: false),
                        StudentId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.ClassId, t.StudentId })
                .ForeignKey("dbo.Students", t => t.StudentId, cascadeDelete: true)
                .ForeignKey("dbo.Classes", t => t.ClassId, cascadeDelete: true)
                .Index(t => t.ClassId)
                .Index(t => t.StudentId);
            
            CreateTable(
                "dbo.Students",
                c => new
                    {
                        StudentId = c.Int(nullable: false, identity: true),
                        HasCriminalRecord = c.Boolean(nullable: false),
                        Name = c.String(),
                        EmailAddress = c.String(),
                        Telephone = c.String(),
                    })
                .PrimaryKey(t => t.StudentId);
            
            CreateTable(
                "dbo.Teachers",
                c => new
                    {
                        TeacherId = c.Int(nullable: false, identity: true),
                        StartDate = c.DateTime(nullable: false),
                        EndDate = c.DateTime(),
                        Name = c.String(),
                        EmailAddress = c.String(),
                        Telephone = c.String(),
                    })
                .PrimaryKey(t => t.TeacherId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Classes", "TeacherId", "dbo.Teachers");
            DropForeignKey("dbo.Enrollments", "ClassId", "dbo.Classes");
            DropForeignKey("dbo.Enrollments", "StudentId", "dbo.Students");
            DropIndex("dbo.Enrollments", new[] { "StudentId" });
            DropIndex("dbo.Enrollments", new[] { "ClassId" });
            DropIndex("dbo.Classes", new[] { "TeacherId" });
            DropTable("dbo.Teachers");
            DropTable("dbo.Students");
            DropTable("dbo.Enrollments");
            DropTable("dbo.Classes");
        }
    }
}
