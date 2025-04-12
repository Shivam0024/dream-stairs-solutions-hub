
import { useState, useEffect } from "react";
import { X, UserPlus, Mail, User, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Disable body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistering(true);

    // Simulate registration process
    setTimeout(() => {
      setIsRegistering(false);
      
      // Store user info in localStorage to remember they've registered
      localStorage.setItem("dreamStairsUser", JSON.stringify({ name, email }));
      
      toast({
        title: "Registration successful!",
        description: "Welcome to Dream Stairs. Explore our services.",
      });
      
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div 
        className="bg-white rounded-lg w-full max-w-md p-6 relative z-10 shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </Button>
        
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-dreamstair-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <UserPlus className="text-dreamstair-accent" size={28} />
          </div>
          <h2 className="text-2xl font-serif font-semibold mb-2">Join Dream Stairs</h2>
          <p className="text-gray-600">Create an account to explore our premium interior solutions</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="reg-name" className="block text-sm font-medium mb-1">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <User className="text-gray-400" size={18} />
              </div>
              <Input
                id="reg-name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10 transition-all focus:border-dreamstair-accent hover:border-dreamstair-accent/70"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="reg-email" className="block text-sm font-medium mb-1">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail className="text-gray-400" size={18} />
              </div>
              <Input
                id="reg-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 transition-all focus:border-dreamstair-accent hover:border-dreamstair-accent/70"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="reg-password" className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock className="text-gray-400" size={18} />
              </div>
              <Input
                id="reg-password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 transition-all focus:border-dreamstair-accent hover:border-dreamstair-accent/70"
                required
                minLength={6}
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">Must be at least 6 characters</p>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-dreamstair-accent hover:bg-dreamstair-accent/90 text-black py-5 text-lg transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] btn-shine"
            disabled={isRegistering}
          >
            {isRegistering ? (
              <>Registering<span className="animate-pulse">...</span></>
            ) : (
              "Register Now"
            )}
          </Button>
          
          <p className="text-center text-sm text-gray-600 mt-4">
            By registering, you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
