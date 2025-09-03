import type { Route } from "./+types/examples";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Examples - IA Tooling Documentation" },
    { name: "description", content: "Code examples and use cases for IA Tooling." },
  ];
}

export default function Examples() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Examples & Use Cases
        </h1>
        <p className="text-lg text-slate-600">
          Practical examples showing how to integrate IA Tooling into your development workflow.
        </p>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>React Component Generation</h2>
        <p>Generate a complete React component with props, state, and styling:</p>
        
        <div className="bg-slate-100 border rounded-lg p-4 mb-6 not-prose">
          <p className="font-semibold mb-2 text-slate-900">Prompt:</p>
          <p className="text-slate-700">"Create a user profile card component"</p>
        </div>

        <pre className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
          <code className="text-sm text-green-400">{`interface UserProfileCardProps {
  user: { name: string; email: string; avatar: string; };
  onEdit: () => void;
}

export function UserProfileCard({ user, onEdit }: UserProfileCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full" />
      <h3 className="text-lg font-semibold">{user.name}</h3>
      <p className="text-gray-600">{user.email}</p>
      <button onClick={onEdit} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Edit Profile
      </button>
    </div>
  );
}`}</code>
        </pre>

        <h2>API Route Generation</h2>
        <p>Create Express.js API routes with validation:</p>

        <div className="bg-slate-100 border rounded-lg p-4 mb-6 not-prose">
          <p className="font-semibold mb-2 text-slate-900">Prompt:</p>
          <p className="text-slate-700">"Create user registration API endpoint"</p>
        </div>

        <pre className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
          <code className="text-sm text-green-400">{`router.post('/register', [
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password, name } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const user = new User({ email, password: hashedPassword, name });
  await user.save();
  
  res.status(201).json({ message: 'User registered successfully' });
});`}</code>
        </pre>

        <h2>Test Generation</h2>
        <p>Generate test suites automatically:</p>

        <pre className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
          <code className="text-sm text-green-400">{`describe('User Registration', () => {
  it('should register a new user', async () => {
    const userData = { email: 'test@example.com', password: 'password123' };
    
    const response = await request(app)
      .post('/api/auth/register')
      .send(userData)
      .expect(201);

    expect(response.body.message).toBe('User registered successfully');
  });
});`}</code>
        </pre>

        <h2>More Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
          <div className="border border-slate-200 rounded-lg p-4">
            <h3 className="font-semibold text-slate-900 mb-2">React Hooks</h3>
            <p className="text-sm text-slate-600">Custom hooks for data fetching</p>
          </div>
          <div className="border border-slate-200 rounded-lg p-4">
            <h3 className="font-semibold text-slate-900 mb-2">State Management</h3>
            <p className="text-sm text-slate-600">Redux and Zustand patterns</p>
          </div>
          <div className="border border-slate-200 rounded-lg p-4">
            <h3 className="font-semibold text-slate-900 mb-2">Authentication</h3>
            <p className="text-sm text-slate-600">JWT and OAuth systems</p>
          </div>
          <div className="border border-slate-200 rounded-lg p-4">
            <h3 className="font-semibold text-slate-900 mb-2">Form Validation</h3>
            <p className="text-sm text-slate-600">React Hook Form patterns</p>
          </div>
        </div>
      </div>
    </div>
  );
}
