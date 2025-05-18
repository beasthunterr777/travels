export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card shadow-inner py-6 mt-auto">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p>&copy; {currentYear} KARNATAKA TOURIST RECOMMENDER. All rights reserved.</p>
        <p className="text-xs mt-1">Your ultimate guide to discovering the wonders of Karnataka.</p>
      </div>
    </footer>
  );
}
